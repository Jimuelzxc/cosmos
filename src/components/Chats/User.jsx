export default function User({content}) {
  return (
    <div className="flex w-full justify-end">
      <p className="border border-secondary-250 bg-secondary-100 inline-block float-end px-[30px] py-[10px] rounded-md text-[1em] text-secondary-300">
        {content}
      </p>
    </div>
  );
}
