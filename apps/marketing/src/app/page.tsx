import { ModeToggle } from '@workspace/theme/mode-toggle';

export default function Page() {
  return (
    <div className="flex min-h-svh items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <ModeToggle />
      </div>
    </div>
  );
}
