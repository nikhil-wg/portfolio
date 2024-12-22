import Card from "./Card";
import Title from "./Title";
export default function Contact() {
  return (
    <div className="flex flex-col md:flex-row justify-center my-20">
      <div className="w-full md:w-7/12">
        <Title>Contact</Title>
        <Card />
      </div>
    </div>
  );
}
