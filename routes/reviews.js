const express = require('express')
const router = express.Router({ mergeParams: true })
const reviews = require('../controllers/reviews')
const { validateReview, isLoggedIn, isReviewAuthor } = require('../middleware')
const Campground = require('../models/campground')
const catchAsync = require('../utils/catchAsync')

router.post('/', isLoggedIn, validateReview, catchAsync(reviews.create))

router.delete(
  '/:reviewId',
  isLoggedIn,
  isReviewAuthor,
  catchAsync(reviews.destroy)
)

module.exports = router
