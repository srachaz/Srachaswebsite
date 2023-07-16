import Image from 'next/image';

const GithubIcon = () => {
  return (
    <a href="https://github.com/srachaz" target="_blank" rel="noopener noreferrer">
      <div className="w-4 h-4">
        <Image src="/icons/github.svg" alt="Twitter Icon" width={24} height={24} />
      </div>
    </a>
  );
};

export default GithubIcon;
