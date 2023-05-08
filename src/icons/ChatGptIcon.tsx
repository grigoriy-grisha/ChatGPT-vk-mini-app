import React from "react";
import { useConfigProvider } from "@vkontakte/vkui";

export function ChatGptIcon() {
  const { appearance } = useConfigProvider();
  const color = appearance === "dark" ? "#000" : "#fff";

  return (
    <svg height="70%" viewBox="0 0 158 161">
      <path
        d="M147.584 65.8918C148.937 61.8059 149.626 57.528 149.627 53.2219C149.627 46.0965 147.739 39.0998 144.158 32.9509C136.962 20.3581 123.614 12.5833 109.169 12.5833C106.323 12.5834 103.485 12.8856 100.702 13.4849C96.9588 9.24491 92.3643 5.8508 87.2214 3.52641C82.0785 1.20201 76.5039 0.000123922 70.8653 0H70.612L70.517 0.000561773C53.0204 0.000561773 37.5039 11.3518 32.1253 28.0861C26.5577 29.2326 21.298 31.5617 16.6981 34.9175C12.0983 38.2732 8.26458 42.5782 5.45354 47.5443C1.8835 53.7301 0.0021846 60.7545 0 67.9063C0.00136434 77.9573 3.71222 87.6503 10.414 95.1082C9.06118 99.194 8.37125 103.472 8.37066 107.778C8.37129 114.903 10.259 121.9 13.8399 128.049C18.0981 135.503 24.601 141.405 32.4108 144.904C40.2206 148.402 48.9338 149.316 57.2937 147.515C61.0372 151.755 65.6321 155.149 70.7753 157.473C75.9186 159.798 81.4935 161 87.1325 161H87.3858L87.4886 160.999C104.995 160.999 120.506 149.648 125.885 132.898C131.452 131.751 136.712 129.422 141.312 126.066C145.912 122.71 149.746 118.405 152.557 113.439C156.123 107.259 158.001 100.241 158 93.0954C157.999 83.0446 154.288 73.3517 147.586 65.894L147.584 65.8918ZM87.3958 150.474H87.3544C80.3495 150.472 73.5669 148.001 68.1863 143.492C68.5058 143.319 68.8215 143.139 69.1333 142.952L101.017 124.435C101.813 123.98 102.474 123.321 102.935 122.525C103.395 121.73 103.638 120.826 103.638 119.905V74.6805L117.114 82.5041C117.185 82.5396 117.246 82.592 117.292 82.6568C117.338 82.7216 117.367 82.7968 117.377 82.8756V120.302C117.358 136.942 103.947 150.441 87.3958 150.474ZM22.9211 122.788C20.2874 118.21 18.8999 113.014 18.8981 107.725C18.8981 106 19.048 104.271 19.3398 102.571C19.5768 102.714 19.9905 102.968 20.2874 103.139L52.1712 121.656C52.9661 122.123 53.87 122.368 54.7905 122.368C55.7109 122.368 56.6148 122.122 57.4095 121.655L96.3362 99.0563V114.704L96.3367 114.731C96.3367 114.806 96.3193 114.881 96.2858 114.948C96.2524 115.016 96.2037 115.074 96.1438 115.119L63.9123 133.83C59.3517 136.469 54.1823 137.859 48.9203 137.86C43.6527 137.859 38.4779 136.466 33.9147 133.821C29.3515 131.175 25.5602 127.37 22.9211 122.786V122.788ZM14.5331 52.8054C18.0349 46.6899 23.5643 42.0074 30.1535 39.5773C30.1535 39.8533 30.1379 40.3423 30.1379 40.6818V77.7157L30.1373 77.7461C30.1374 78.6656 30.3796 79.5688 30.8392 80.3638C31.2989 81.1588 31.9595 81.8173 32.7542 82.2725L71.6809 104.868L58.205 112.691C58.1385 112.735 58.0622 112.762 57.9829 112.769C57.9036 112.777 57.8238 112.764 57.7505 112.733L25.5156 94.0066C20.9587 91.3524 17.1757 87.5408 14.5456 82.9535C11.9156 78.3663 10.5309 73.1646 10.5303 67.8697C10.5323 62.5832 11.913 57.3896 14.5348 52.8071L14.5331 52.8054ZM125.256 78.7112L86.3291 56.1132L99.8056 48.2924C99.8721 48.2483 99.9484 48.2214 100.028 48.2142C100.107 48.2069 100.187 48.2195 100.26 48.2508L132.494 66.9614C137.055 69.6114 140.842 73.421 143.475 78.0078C146.109 82.5946 147.495 87.7971 147.497 93.0932C147.497 105.734 139.651 117.045 127.855 121.41V83.2691C127.857 83.2551 127.857 83.2404 127.857 83.2264C127.857 82.3102 127.616 81.4104 127.16 80.6176C126.703 79.8248 126.046 79.1672 125.256 78.7112ZM138.669 58.4138C138.356 58.2208 138.04 58.0315 137.722 57.8461L105.838 39.3289C105.043 38.8632 104.14 38.6176 103.22 38.6173C102.3 38.6176 101.396 38.8632 100.601 39.3289L61.6739 61.9274V46.2796L61.6733 46.2526C61.6733 46.0997 61.7455 45.9558 61.8668 45.8642L94.0983 27.1694C98.6574 24.5267 103.827 23.1356 109.09 23.1353C125.662 23.1353 139.102 36.6478 139.102 53.3101C139.101 55.02 138.956 56.7268 138.669 58.4121V58.4138ZM54.347 86.3032L40.8677 78.4796C40.797 78.4442 40.736 78.3917 40.6903 78.3269C40.6446 78.2621 40.6154 78.1869 40.6055 78.1081V40.6807C40.6128 24.0273 54.0524 10.5261 70.6176 10.5261C77.6335 10.5276 84.4274 12.9987 89.8204 17.5106C89.5778 17.6438 89.1546 17.8787 88.8734 18.0501L56.9896 36.5668C56.1941 37.0219 55.5326 37.6806 55.0723 38.4761C54.6121 39.2715 54.3695 40.1753 54.3693 41.0955V41.1253L54.347 86.3032ZM61.6677 70.434L79.005 60.3659L96.3423 70.4272V90.5565L79.005 100.618L61.6677 90.5565V70.434Z"
        fill={color}
      />
    </svg>
  );
}
