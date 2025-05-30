import React from 'react';

interface ReviewCardProps {
  text: string;
  name: string;
  title: string;
}

const reviews = [
  {
    text: 'John Doe was a brilliant student; always stood out with his assignments.',
    name: 'Jane Doe',
    title: 'Assistant Professor',
  },
  {
    text: 'John Doe was a brilliant student; always stood out with his assignments.',
    name: 'Jane Doe',
    title: 'Assistant Professor',
  },
  {
    text: 'John Doe was a brilliant student; always stood out with his assignments.',
    name: 'Jane Doe',
    title: 'Assistant Professor',
  },
];

const ReviewCard: React.FC<ReviewCardProps> = ({ text, name, title }) => (
  <div className="rounded-2xl border-2 border-black p-6 w-full sm:w-[300px] shadow-sm">
    <p className="font-semibold text-gray-800 mb-4">{text}</p>
    <p className="text-gray-400 font-semibold">
      {name}<br />
      {title}
    </p>
  </div>
);

const Article: React.FC = () => {
  return (
    <section className="px-4 py-8 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 font-handwriting">Reviews from my Teachers</h2>
      <div className="flex flex-wrap gap-6 justify-start">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </section>
  );
};

export default Article;
