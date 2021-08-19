const router = require('express').Router()
const Post = require('../models/Post')
const mongoose = require('mongoose')

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find()
    res.status(200).json(posts)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)    
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const post = Post.findById(id)
    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //   return res.status(404).json(`Message with id ${id} was not found.`)
    // }
    res.status(200).json(post)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: message })
  }
})

router.post('/', async (req, res) => {
  try {
    const { title, body } = req.body
    const post = new Post({ title, body })
    await post.save()
    res.status(201).json(post)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
})

module.exports = router