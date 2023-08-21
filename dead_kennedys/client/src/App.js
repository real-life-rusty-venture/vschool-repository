import React from "react";
import BountyForm from "./BountyForm";
import Bounties from "./Bounties";
import { ContextHolder } from "./ContextHolder";
export default function App() {
  return( 
      <ContextHolder>
          <div>
              <BountyForm/>
              <Bounties/>
          </div>
      </ContextHolder>
      )
}
//get and post fucking WORK!!!!!!!
//unfortunately edit an delete do not
//no errors just doesnt do anything
//also the caveat to the post function "working"
//is that the checkbox still  does not work
//if unchecked the bounty will not display isLiving data
//if checked the bounty will display the word "on" as the isLiving data???
//isLiving is a boolean. hows that even happen
//HILARIOUS