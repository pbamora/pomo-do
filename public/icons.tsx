interface IconProps {
  fill?: string;
  width?: string;
  strokeWidth?: string;
}

export function HomeIcon(props: IconProps) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill={props.fill}
        width={props.width}
      >
        <path
          strokeWidth={props.strokeWidth || 2}
          d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
        />
      </svg>
    </>
  );
}

export function Trophy(props: IconProps) {
  return (
    <>
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={props.fill}
        width={props.width}
      >
        <path
          strokeWidth={props.strokeWidth || 2}
          clipRule="evenodd"
          fill-rule="evenodd"
          d="M14.09,16H15c6.643,0,9-3.5,9-6.5a3.5,3.5,0,0,0-2.84-3.433,7.564,7.564,0,0,0,.409-1,3.887,3.887,0,0,0-.626-3.458A3.979,3.979,0,0,0,17.729,0H6.271A3.979,3.979,0,0,0,3.057,1.612,3.887,3.887,0,0,0,2.431,5.07a7.564,7.564,0,0,0,.409,1A3.5,3.5,0,0,0,0,9.5c0,3,2.357,6.5,9,6.5h.91a5.027,5.027,0,0,1,.09.921V20a1.883,1.883,0,0,1-2,2H6a1,1,0,0,0,0,2H18a1,1,0,0,0,0-2H16.006A1.885,1.885,0,0,1,14,20V16.92A5.025,5.025,0,0,1,14.09,16Zm1.636-2.851a23.486,23.486,0,0,0,4.4-5.225A1,1,0,0,0,20.5,8,1.5,1.5,0,0,1,22,9.5c0,2.176-1.839,4.5-7,4.5h-.056A4.805,4.805,0,0,1,15.726,13.149ZM9,14c-5.161,0-7-2.324-7-4.5A1.5,1.5,0,0,1,3.5,8a1,1,0,0,0,.375-.076,23.486,23.486,0,0,0,4.4,5.225A4.805,4.805,0,0,1,9.056,14Z"
        />
      </svg>
    </>
  );
}

export function Close(props: IconProps) {
  return (
    <>
      <svg
        className="shadow-2xl"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill={props.fill}
        width={props.width}
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
          clipRule="evenodd"
          strokeWidth={props.strokeWidth || 2}
        />
      </svg>
    </>
  );
}

export function TurnRight(props: IconProps) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke={props.fill}
        width={props.width}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          strokeWidth={props.strokeWidth || 2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </>
  );
}

export function ClipList(props: IconProps) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill={props.fill}
        width={props.width}
      >
        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
        <path
          fill-rule="evenodd"
          d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
          clipRule="evenodd"
          strokeWidth={props.strokeWidth || 2}
        />
      </svg>
    </>
  );
}

export function FireIcon(props: IconProps) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill={props.fill}
        width={props.width}
      >
        <path
          fillRule="evenodd"
          d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
          clipRule="evenodd"
          strokeWidth={props.strokeWidth || 2}
        />
      </svg>
    </>
  );
}

export function UserCircle(props: IconProps) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill={props.fill}
        width={props.width}
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
          clipRule="evenodd"
        />
      </svg>
    </>
  );
}
