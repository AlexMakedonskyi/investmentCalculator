import React, {useState} from "react";
import Item from "./Item";

function ItemList(props){

		


	return(
			<tbody>
			{props.itemsArr.length > 0 ? (props.itemsArr.map((item) => (
			<Item 
			key={item.key}
			year={item.year}
			savingsEndOfYear={item.savingsEndOfYear}
			yearlyInterest={item.yearlyInterest}
			totalInterestArr={item.totalInterestArr}
			yearlyContribution={item.yearlyContribution}
			/>
			))) : (<tr>
            <td>Nothing</td>
            <td>Nothing</td>
            <td>Nothing</td>
            <td>Nothing</td>
            <td>Nothing</td>
          </tr>)}
			</tbody>
	)
};

export default ItemList;