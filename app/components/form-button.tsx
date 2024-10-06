interface FormButtonProps {
  loading: boolean;
  text: string;
}

export default function FormButton({ text, loading }: FormButtonProps) {
  return (
    <button
      disabled={loading}
      type="submit"
      className="primary-btn h-10 disabled:bg-neutral-400 disabled:text-neutral-300"
    >
      {loading ? '로딩 중' : text}
    </button>
  );
}
