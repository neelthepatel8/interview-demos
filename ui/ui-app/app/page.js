import FieldBuilder from "@/components/FieldBuilder";
import ThemedComponent from "@/components/Theme/ThemedComponent";

export default function Home() {
  return (
    <ThemedComponent>
      <div className=" flex items-center justify-center w-screen h-screen font-sans bg-primary-bg dark:bg-dark-bg">
        <FieldBuilder />
      </div>
    </ThemedComponent>
  );
}
