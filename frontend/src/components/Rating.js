import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar as sol, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons"
import { faStar } from "@fortawesome/free-regular-svg-icons"

export const Rating = ({ rating }) => {
  const solidStars = []
  const emptyStarts = []
  const halfStar = rating % 1 === 0.5 ? true : false
  for (var i = 0; i < Math.floor(rating); i++) {
    solidStars.push(<FontAwesomeIcon color='gold' icon={sol}></FontAwesomeIcon>)
  }
  for (var i = 0; i < 5 - Math.ceil(rating); i++) {
    emptyStarts.push(
      <FontAwesomeIcon color='gold' icon={faStar}></FontAwesomeIcon>
    )
  }

  return (
    <>
      <span>
        {solidStars}
        {halfStar ? (
          <FontAwesomeIcon color='gold' icon={faStarHalfAlt}></FontAwesomeIcon>
        ) : (
          ""
        )}
        {emptyStarts}
      </span>
    </>
  )
}
