import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
  UserCredential,
} from "firebase/auth";
import { createContext, ReactNode, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";

type Props = {
  children: ReactNode;
};

type SignInInput = {
  email: string;
  password: string;
};

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  googleLogin: () => Promise<UserCredential>;
  createUser: (data: SignInInput) => Promise<UserCredential>;
  signIn: (data: SignInInput) => Promise<UserCredential>;
  logOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

const auth = getAuth(app);

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const createUser = ({ email, password }: SignInInput) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = ({ email, password }: SignInInput) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth).then(() => setUser(null));
  };

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
        console.log(currentUser);
      } else {
        setLoading(false);
      }
    });
    return () => {
      return unSubscribe();
    };
  }, []);

  const authInfo = { user, googleLogin, createUser, signIn, logOut, loading };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
