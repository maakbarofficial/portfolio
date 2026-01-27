import { useEffect, useState } from "react";

const useTypewriter = ({
  words = [],
  typingSpeed = 100,
  deletingSpeed = 60,
  delayBetweenWords = 2000,
  loop = true,
}) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    let timeout;

    if (!isDeleting && text === currentWord) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), delayBetweenWords);
    } else if (isDeleting && text === "") {
      // Move to next word
      setIsDeleting(false);
      setWordIndex((prev) => (loop ? prev + 1 : prev));
    } else {
      timeout = setTimeout(
        () => {
          setText((prev) =>
            isDeleting
              ? currentWord.substring(0, prev.length - 1)
              : currentWord.substring(0, prev.length + 1)
          );
        },
        isDeleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [
    text,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    delayBetweenWords,
    loop,
  ]);

  return text;
};

export default useTypewriter;
