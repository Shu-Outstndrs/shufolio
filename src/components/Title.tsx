export const Title = ({ children }: { children: string | React.ReactNode }) => {
  return (
    <div className="py-8">
      <h1 className="text-5xl font-medium">{children}</h1>
    </div>
  );
};
