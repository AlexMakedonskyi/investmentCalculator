import React, {useState} from "react";

function Item(props){
	return(
          <tr>
            <td>{props.year}</td>
            <td>${props.savingsEndOfYear}</td>
            <td>${props.yearlyInterest}</td>
            <td>${props.totalInterestArr}</td>
            <td>${props.yearlyContribution}</td>
          </tr>
	)
};

export default Item;