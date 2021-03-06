import React from 'react'

const ReviewShowTile = (props) => {
	let deleteReview = () => {
		props.handleDelete(props.id)
	}

	let deleteButton

	if((props.userId == props.currentUser) || props.currentUserRole === "admin") {
		deleteButton = <button className="button alert" onClick={deleteReview}>Delete</button>
	}

	return(
		<div key={props.id} className=" row review-container new-callout">
					<ul className="no-bullet list">
						<li><strong>Donut Review:</strong> {props.donutReview}</li>
						<li><strong>Coffee Review:</strong> {props.coffeeReview}</li>
						<li><strong>Shop Review:</strong> {props.shopReview}</li>
					</ul>
					<blockquote className="cite">
						<cite>{props.firstName} {props.lastName}</cite>
					</blockquote>
					{deleteButton}
		</div>
	)
}

export default ReviewShowTile
