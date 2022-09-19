import React from 'react';
import useBlogs from '../../hooks/hooks';

import BlogCard from '../../components/BlogCard/BlogCard';

export default function Main() {
  const blogs = useBlogs();
  return (
    <section className="main">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </section>
  );
}