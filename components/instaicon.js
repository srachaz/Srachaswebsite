import Image from 'next/image';

const InstaIcon = () => {
  return (
    <a href="https://www.instagram.com/sracha.rj/" target="_blank" rel="noopener noreferrer">
      <div className="w-4 h-4">
        <Image src="/icons/instagram.svg" alt="Twitter Icon" width={24} height={24} />
      </div>
    </a>
  );
};

export default InstaIcon;
