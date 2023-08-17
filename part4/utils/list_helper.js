const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) =>{
  let total = 0
  blogs.map((blog)=>{
    total+=blog.likes
  })
  return total
}

const favoriteBlog = (blogs) =>{
  let favIdx = 0
  let maxLikes = 0
  blogs.map((blog,idx)=>{
    if(blog.likes>maxLikes){
      favIdx = idx
      maxLikes = blog.likes
    }
  })
  return blogs[favIdx]
}

module.exports = {
  dummy,totalLikes,favoriteBlog
}