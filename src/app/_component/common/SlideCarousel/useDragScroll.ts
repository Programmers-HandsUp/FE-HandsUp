import { useEffect, useState } from "react";

interface UseDragScrollParams {
  containerRef: React.RefObject<HTMLDivElement>;
  childSize: number;
}

interface UseDragScrollResult {
  handleMouseDown: (e: React.MouseEvent) => void;
  handleMouseMove: (e: React.MouseEvent | React.TouchEvent) => void;
  handleMouseUp: () => void;
  buttonScrollLeft: () => void;
  buttonScrollRight: () => void;
  handleTouchDown: (e: React.TouchEvent) => void;
  isLeftButtonActive: boolean;
  isRightButtonActive: boolean;
  currentElement: number;
  isDragging: boolean;
  handleClickIndicator: (index: number) => void;
}
interface ScrollButtonState {
  isLeftButtonActive: boolean;
  isRightButtonActive: boolean;
}

const useDragScroll = ({
  containerRef,
  childSize
}: UseDragScrollParams): UseDragScrollResult => {
  const [isDragging, setIsDragging] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentScrollLeft, setCurrentScrollLeft] = useState(0);
  const [buttonState, setButtonState] = useState<ScrollButtonState>({
    isLeftButtonActive: false,
    isRightButtonActive: true
  });
  const [currentElement, setCurrentElement] = useState(0);
  const [isTouch, setIsTouch] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    e.preventDefault();
    e.stopPropagation();

    const clientX = e.clientX;
    const { scrollLeft } = containerRef.current;

    setIsClick(true);
    setStartX(clientX);
    setCurrentScrollLeft(scrollLeft || 0);
  };

  const handleTouchDown = (e: React.TouchEvent) => {
    if (!containerRef.current) return;

    setIsTouch(true);

    const clientX = e.touches[0].clientX;
    const { scrollLeft } = containerRef.current;

    setIsClick(true);
    setStartX(clientX);
    setCurrentScrollLeft(scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current || !isClick) return;
    if (!("touches" in e) && isTouch) {
      setIsTouch(false);
      return;
    }
    setIsDragging(true);
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;

    const currentX = clientX;
    const walk = currentX - startX;
    containerRef.current.scrollLeft = currentScrollLeft - walk;
  };

  const handleClickIndicator = (index: number) => {
    if (!containerRef.current) return;
    setCurrentElement(index);
    containerRef.current.scrollBy({
      left: index * childSize - containerRef.current.scrollLeft,
      behavior: "smooth"
    });
  };

  const handleMouseUp = () => {
    if (!isDragging || !containerRef.current) return;

    const { scrollLeft } = containerRef.current;
    const nearestElementIndex = Math.round(scrollLeft / childSize);
    handleClickIndicator(nearestElementIndex);

    setIsDragging(false);
    setIsClick(false);
  };

  const buttonScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= childSize;
    }
  };

  const buttonScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += childSize;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      const maxScrollLeft = scrollWidth - clientWidth;

      setButtonState({
        isLeftButtonActive: scrollLeft > 0,
        isRightButtonActive: scrollLeft < maxScrollLeft
      });
    };

    const currentContainerRef = containerRef.current;

    if (currentContainerRef) {
      currentContainerRef.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (currentContainerRef) {
        currentContainerRef.removeEventListener("scroll", handleScroll);
      }
      setIsTouch(false);
    };
  }, [containerRef]);

  return {
    isLeftButtonActive: buttonState.isLeftButtonActive,
    isRightButtonActive: buttonState.isRightButtonActive,
    buttonScrollLeft,
    buttonScrollRight,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleTouchDown,
    isDragging,
    handleClickIndicator,
    currentElement
  };
};

export default useDragScroll;
