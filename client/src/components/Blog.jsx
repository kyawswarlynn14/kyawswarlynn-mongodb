import React from "react";

function Blog() {

  return (
    <div id="blog" className="pageMainDiv text-white">
      <h3 className="subTitle">
        Blog
      </h3>

      <div className="h-[440px] md:h-[400px] w-auto rounded-xl relative   my-4">
        <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
        <img src={'https'} alt="blog image" className="h-full w-full overflow-hidden object-cover rounded-xl" />

        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-4 md:gap-y-8 absolute top-0 px-4 md:px-8">
            <h3 className="text-xl font-semibold tracking-wider">Embracing Creativity</h3>

            <p className="text-lg md:text-xl text-justify py-2 leading-6 md:leading-8 text-white font-mono ">
            Welcome to my portfolio blog page, where I&apos;ll be sharing my creative journey as a software developer. Here, I&apos;ll delve into the diverse world of visual expression, exploring various mediums, techniques, and inspirations that have shaped my work over the years.
            </p>

            <a href="https://kyawswarlynn-blog.vercel.app/">
              <button className="normalButton">
                  Go to Blog
              </button>
            </a>
        </div>
        
      </div>
    </div>
  );
}

export default Blog;
