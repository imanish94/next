module.exports = {
  reactStrictMode: true,


  async rewrites(){
    return [
      {
        source : "/testing",
        destination : "/blog"
      }
    ]
  },

  async redirects(){
    return[
      {
        source : "/mytesting",
        destination : "/blog/4",
        permanent : true
      }
    ]
  },

  async headers(){
    return[
      {
        source : "/blog/:blogId",
        headers : [
          {
           key : "set-new-key",
           value : "testing"
          }
        ]
      }
    ]
  }

}
