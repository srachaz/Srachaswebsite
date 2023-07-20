import Image from 'next/image';

const LinkedInIcon = () => {
  return (
    <a href="https://www.linkedin.com/in/sarah-zhang-b0308b199/" target="_blank" rel="noopener noreferrer">
      <div className="w-4 h-4">
        <Image src="/icons/linkedin.svg" alt="LinkedIn Icon" width={24} height={24} />
      </div>
    </a>
  );
};

export default LinkedInIcon;
