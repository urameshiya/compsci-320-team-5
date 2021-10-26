import React from "react";
import RefBox from "./Previous_refs";
import { apiGet } from "../../utils/api-fetch";

const prevrefdata = [{refTitle: "Whatever",
                    referred: "Whatever",
                    referredDesc: "Whatever",
                    imgUrl: "Whatever",
                    refStatus: "Whatever",
                    refStatusDesc: "Whatever"
                    }]

function MainPreviousRef(){
    const prevRefComponents = prevrefdata.map( refData => <RefBox refTitle = {refData?.refTitle} referred = {refData?.referred}
        referredDesc = {refData?.referredDesc} imgUrl = {refData?.imgUrl} refStatus = {refData?.refStat}  refStatusDesc = {refData?.reftStatDesc}/>)
        console.log(prevrefdata)
    return(
        <div>
            {prevRefComponents}
        </div>
    )
}

function getReferral() {
  apiGet("/referral/get")
    .then((res) => console.log(res))
}

export default MainPreviousRef;
