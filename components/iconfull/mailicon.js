import Image from 'next/image';

const MailIcon = () => {
  return (
    <a href="sarahrjzhang@gmail.com" target="_blank" rel="noopener noreferrer">
      <div className="w-4 h-4">
        <Image src="/icons/mail.svg" alt="Mail Icon" width={24} height={24} />
      </div>
    </a>
  );
};

export default MailIcon;
