import Image from 'next/image';

const TwitterIcon = () => {
  return (
    <a href="https://twitter.com/sracha_z" target="_blank" rel="noopener noreferrer">
      <div className="text-3xl text-[#737df0] font-bold w-4 h-4">
        <Image src="/icons/twitter.svg" alt="Twitter Icon" width={24} height={24} />
      </div>
    </a>
  );
};

export default TwitterIcon;
