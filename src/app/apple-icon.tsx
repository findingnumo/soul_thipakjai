import { ImageResponse } from 'next/og';

export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#FDFBF7',
          borderRadius: '40px',
        }}
      >
        <svg
          width="140"
          height="140"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main 4-point sparkle star */}
          <path
            d="M16 2L18.5 12.5L29 16L18.5 19.5L16 30L13.5 19.5L3 16L13.5 12.5L16 2Z"
            fill="#0D7377"
          />
          {/* Small accent sparkle */}
          <path
            d="M25 5L26 8L29 9L26 10L25 13L24 10L21 9L24 8L25 5Z"
            fill="#0D7377"
            opacity="0.6"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
