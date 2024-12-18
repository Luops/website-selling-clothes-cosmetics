/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import React, { useState } from 'react'
import { signIn } from "next-auth/react";

function page() {
  // const session = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });
  }
  return (
    <div>
      <form action="">
        <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" name='password' value={password} onChange={e => setPassword(e.target.value)}/>
        <button type='button' onClick={handleSubmit}>Login</button>
      </form>
    </div>
  )
}

export default page