"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

type BlogPostCardProps = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
};

const BlogPostCard = ({ slug, title, date, excerpt, imageUrl }: BlogPostCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
    >
      <Link href={`/blog/${slug}`} className="block">
        {/* Image Placeholder */}
        <div className="w-full h-48 bg-gray-300 flex items-center justify-center">
          <span className="text-gray-500 text-sm">Image (400x300)</span>
        </div>
      </Link>
      
      <div className="p-6 flex-grow flex flex-col">
        <p className="text-sm text-brand-gray">{date}</p>
        <h3 className="mt-2 text-xl font-semibold text-brand-dark">
          <Link href={`/blog/${slug}`} className="hover:text-brand-orange">
            {title}
          </Link>
        </h3>
        <p className="mt-3 text-brand-gray flex-grow">{excerpt}</p>
        <div className="mt-4">
          <Link
            href={`/blog/${slug}`}
            className="font-semibold text-brand-orange hover:text-orange-700"
          >
            Read More &rarr;
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPostCard;