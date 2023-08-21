import React from "react";
import BountyForm from "./BountyForm";
import Bounties from "./Bounties";
import { ContextHolder } from "./ContextHolder";
export default function App() {
    return (
        <ContextHolder>
        <div>
            <BountyForm/>
            <Bounties/>
        </div>
        </ContextHolder>
    )
}