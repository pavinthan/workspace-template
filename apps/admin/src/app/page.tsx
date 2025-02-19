import { Button } from '@workspace/ui/components/button';

export default function Page() {
  return (
    <div className="flex min-h-svh items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Admin</h1>
        <Button size="sm">Button</Button>
      </div>
    </div>
  );
}
