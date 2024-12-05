import { Button } from "@/components/ui/button";
// 홈페이지
export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Button>Click me -default</Button>
      <Button variant={'destructive'} size={'sm'}>Click me -destructive</Button>
      <Button variant={'outline'} size={'lg'}>Click me -outline</Button>
      <Button variant={'secondary'} size={'icon'}>icon</Button>
    </div>
  );
}