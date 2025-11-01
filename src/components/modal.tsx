import { FocusTrap } from 'focus-trap-react';
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';

export function Modal({
  children,
  isOpen,
  setIsOpen,
}: {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [container, setContainer] = useState<HTMLElement | null>(null);
  const childRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = document.getElementById('modalContainer');
    setContainer(el);

    function handleClickOutside(e: MouseEvent) {
      if (!childRef.current) return;

      if (!childRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [setIsOpen]);

  if (!container || !isOpen) return null;

  return createPortal(
    <div
      role='dialog'
      aria-modal='true'
      className='fixed inset-0 z-[9999] bg-black/50 grid place-items-center'
    >
      <FocusTrap>
        <div ref={childRef}>{children}</div>
      </FocusTrap>
    </div>,
    container,
  );
}
