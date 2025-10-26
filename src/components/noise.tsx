import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Noise({ positionClassName }: { positionClassName?: string }) {
  return (
    <div
      aria-hidden='true'
      className='absolute inset-0 rounded-[10px] overflow-hidden pointer-events-none'
    >
      <div className={cn('w-[1530px] h-[1021px] absolute', positionClassName)}>
        <Image
          src={'/assets/plan/desktop/bg-steps.png'}
          alt=''
          loading={'lazy'}
          priority={false}
          quality={100}
          fill
        />
      </div>
    </div>
  );
}
