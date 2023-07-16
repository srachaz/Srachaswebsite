import Image from 'next/image';

const SpotifyIcon = () => {
  return (
    <a href="https://open.spotify.com/user/09s1h7qq4f8fcyvm13apkn1nd?si=5db3f31d28454631" target="_blank" rel="noopener noreferrer">
      <div className="w-4 h-4">
        <Image src="/icons/spotify.svg" alt="Spotify Icon" width={24} height={24} />
      </div>
    </a>
  );
};

export default SpotifyIcon;
