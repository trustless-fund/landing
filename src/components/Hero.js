import React, {Component} from 'react';

import '../layout/components/hero.sass';
import '../layout/components/lock-animation.sass';

class Hero extends Component {
  render() {
    return(
      <section className="hero">
        <div className="hero__left">
          <h1 className="hero__header">
            Lock in the Time-Value of Your Money
          </h1>
          <h4 className="hero__subheader">
            Trustless Fund is an advanced timelock for ETH and ERC-20 assets. 
          </h4>
          <a 
            href="https://app.trustless.fund/"
            className="hero__button"
            target="_blank"
            rel="noopener noreferrer">
            Create Fund
          </a>
        </div>
        <svg className="hero__image" width="869" height="991" viewBox="0 0 869 991" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="lock">
        <path id="Vector" d="M635.889 316H198.804C165.797 316 139.04 342.738 139.04 375.721V812.493C139.04 845.476 165.797 872.214 198.804 872.214H635.889C668.895 872.214 695.653 845.476 695.653 812.493V375.721C695.653 342.738 668.895 316 635.889 316Z" fill="url(#paint0_linear)"/>
        <path id="Vector_2" d="M418.205 700.008H476.789L447.505 581.193C447.505 581.193 476.789 577.751 476.789 531.251C476.789 484.75 442.328 474.426 419.924 474.426C397.52 474.426 363.058 484.758 363.058 531.251C363.058 577.744 392.372 581.193 392.372 581.193L363.066 700.008H421.657" fill="#3A3A3A"/>
        <path id="Vector_3" d="M363.066 700.008L368.691 677.202H471.179L476.797 700.008H363.066Z" fill="#2B2B2B"/>
        <path id="Vector_4" d="M419.931 93.8595C531.944 93.8595 549.604 204.068 549.604 204.068V316H609.488V205.792C609.488 205.792 592.253 37.0347 419.931 37.0347C247.609 37.0347 230.374 205.792 230.374 205.792V316H290.258V204.068C290.258 204.068 307.956 93.8595 419.931 93.8595Z" fill="#3A3A3A"/>
        <path id="Vector_5" d="M290.691 293.612H230.374V316H290.691V293.612Z" fill="#2B2B2B"/>
        <path id="Vector_6" d="M609.488 293.612H549.798V316H609.488V293.612Z" fill="#2B2B2B"/>
        <path id="Vector_7" d="M549.798 805.11C549.798 811.082 544.42 815.935 537.846 815.935H302.524C295.95 815.935 290.572 811.06 290.572 805.11C290.572 799.16 295.95 794.286 302.524 794.286H537.846C544.42 794.293 549.798 799.153 549.798 805.11Z" fill="url(#paint1_linear)"/>
        <g id="hanging-leg">
        <path id="LegLower" d="M760.714 422.334C742.6 400.222 730.341 383.831 723.936 373.161C712.977 354.886 704.005 338.62 701.173 332.409C694.45 317.598 716.72 310.663 721.762 317.568C729.397 328.019 745.703 360.926 770.679 416.287L760.714 422.334Z" fill="#B28B67"/>
        <path id="LegLower_2" d="M723.585 415.906L689.863 331.08C682.654 315.62 717.504 305.452 722.786 312.648C734.813 328.99 763.418 393.436 767.004 398.304L723.585 415.906Z" fill="#696B7C"/>
        <path id="shoe" d="M752.922 419.027C751.891 421.774 751.383 423.827 751.383 425.186C751.466 427.62 751.744 430.044 752.212 432.434H804.043C805.387 427.985 804.61 425.584 801.712 425.23C798.806 424.872 796.4 424.551 794.48 424.267L770.38 413.57C770.157 413.471 769.904 413.465 769.676 413.551C769.448 413.638 769.264 413.811 769.163 414.033L767.616 417.765C764.927 419.009 762.743 419.634 761.065 419.639C759.7 419.639 757.815 419.089 755.409 417.989C754.967 417.787 754.461 417.768 754.005 417.937C753.548 418.107 753.177 418.45 752.974 418.893C752.953 418.936 752.935 418.981 752.922 419.027Z" fill="#E4E4E4"/>
        </g>
        <g id="Bottom/Sitting/Baggy-Pants">
        <g id="Lower Leg">
        <path id="LegLower_3" d="M633.774 398.893C640.341 389.316 664.239 357.088 677.253 343.778C680.988 339.948 684.641 336.268 688.093 332.842C698.35 322.659 718.774 339.777 708.539 349.048C683.035 372.146 645.832 403.328 642.724 406.112C638.361 410.009 629.643 404.91 633.774 398.893Z" fill="#B28B67"/>
        </g>
        <g id="Accessories/Shoe/Flat-Sneaker">
        <path id="shoe_2" d="M635.313 394.571C633.047 396.432 631.576 397.953 630.898 399.132C629.751 401.291 628.777 403.538 627.985 405.851L672.875 431.747C676.267 428.567 676.795 426.099 674.459 424.342C672.123 422.585 670.196 421.105 668.677 419.9L653.183 398.565C653.112 398.467 653.022 398.385 652.919 398.322C652.816 398.259 652.702 398.217 652.582 398.198C652.463 398.179 652.341 398.184 652.224 398.213C652.106 398.241 651.996 398.292 651.898 398.363L648.686 400.842C645.697 400.58 643.524 400.036 642.067 399.192C640.886 398.51 639.532 397.092 638.003 394.937C637.72 394.54 637.292 394.271 636.811 394.19C636.331 394.109 635.838 394.222 635.44 394.504L635.313 394.571Z" fill="#E4E4E4"/>
        </g>
        <path id="Leg and Butt" d="M677.746 335.32C649.707 330.751 630.928 327.631 621.411 325.959C594.278 321.174 586.367 306.587 591.043 274.755H641.036C647.655 276.656 675.296 288.464 723.958 310.177C732.714 314.515 731.078 327.347 729.479 331.543C729.414 331.717 714.653 356.994 685.194 407.374L644.3 381.343L677.798 338.388C678.695 336.604 678.665 335.581 677.746 335.32Z" fill="#505260"/>
        </g>
        <g id="head">
        <g id="Head">
        <path id="Vector_8" d="M615.823 118.89C610.481 112.627 606.858 104.953 607.471 96.3528C609.211 71.576 643.733 77.0255 650.441 89.5297C657.15 102.034 656.358 133.761 647.685 135.993C644.226 136.889 636.852 134.701 629.344 130.185L634.058 163.48H606.246L615.823 118.89Z" fill="#B28B67"/>
        </g>
        <path id="hair" d="M639.46 75.734C635.677 74.682 631.749 74.2484 627.828 74.45C629.163 71.2588 629.649 67.7768 629.24 64.3422C628.829 61.0127 627.335 58.176 625.96 55.2049C625.384 53.8083 624.562 52.5264 623.532 51.42C622.44 50.3727 621.081 49.6446 619.603 49.3148C618.126 48.9956 616.598 48.9956 615.121 49.3148C614.456 49.4567 613.866 49.7553 613.223 49.9195C612.581 50.0838 612.245 49.6806 611.729 49.2626C610.479 48.3057 608.98 47.7279 607.411 47.5979C605.755 47.4208 604.079 47.6198 602.51 48.1801C600.951 48.6807 599.545 49.5696 598.424 50.7631C597.913 51.3141 597.499 51.9477 597.199 52.6368C597.079 52.9205 597.057 53.0922 596.773 53.1967C596.489 53.3012 596.205 53.2938 595.929 53.3834C594.597 53.8528 593.373 54.5833 592.327 55.5319C591.282 56.4805 590.436 57.6282 589.84 58.9076C589.093 60.4006 588.787 63.0955 588.884 66.0965C588.981 69.0975 591.678 76.9061 594.211 79.7578C596.58 82.2784 599.659 84.02 603.041 84.7519C600.951 87.2756 599.377 90.1848 598.409 93.3145C597.277 96.6764 596.574 100.168 596.317 103.706C595.971 107.129 596.148 110.585 596.84 113.956C597.133 115.435 597.724 116.838 598.578 118.081C599.433 119.323 600.532 120.379 601.808 121.182C603.027 121.894 604.307 122.496 605.633 122.981C606.91 123.512 608.229 123.934 609.578 124.243C612.14 124.773 615.091 124.683 617.048 122.645C617.814 121.874 618.488 121.017 619.058 120.092C619.244 119.764 619.356 119.555 619.132 119.241C618.817 118.88 618.461 118.557 618.072 118.278C616.082 116.616 614.816 114.248 614.538 111.671C614.224 108.961 614.956 105.46 617.593 104.273C620.851 102.78 624.436 104.49 627.305 106.05C628.53 101.713 631.04 97.8384 635.022 95.8153C639.4 93.6131 644.428 93.3593 648.932 91.4706C650.157 91.0456 651.265 90.34 652.167 89.4102C652.578 88.9839 652.894 88.4749 653.093 87.9172C653.129 87.5724 653.09 87.224 652.979 86.8956C652.868 86.5671 652.688 86.2663 652.451 86.0136C650.561 82.9752 643.262 76.8911 639.46 75.734Z" fill="#191847"/>
        </g>
        <g id="Body/Long-Sleeve">
        <path id="Skin" d="M689.945 223.29L734.26 217.251C743.125 212.324 751.281 208.987 758.726 207.24C760.826 207.181 764.157 207.942 759.19 212.078C754.222 216.213 749.186 220.79 750.075 222.999C750.964 225.209 755.574 224.388 756.336 227.784C756.834 230.049 749.341 230.415 733.857 228.882L697.916 243.133L689.945 223.29ZM550.747 233.54L575.325 233.63C548.382 294.232 534.33 325.964 533.169 328.825C530.577 335.253 536.068 345.047 538.398 350.318C530.741 353.737 531.555 341.061 521.904 345.547C513.088 349.646 506.387 357.074 496.205 350.773C494.95 350.026 493.575 347.093 496.892 344.801C505.147 339.142 517.063 329.236 518.661 325.981C520.858 321.562 531.553 290.748 550.747 233.54Z" fill="#997659"/>
        <path id="Clothes Back" d="M618.064 155.649L637.301 156.933C642.044 199.775 667.855 226.836 725.654 217.677L733.334 272.852C679.315 279.824 631.937 258.212 622.225 199.693C619.715 184.554 617.728 168.795 618.064 155.649Z" fill="#AFB9C5"/>
        <path id="Clothes" d="M608.569 150.05L637.704 156.724C637.704 206.837 653.683 238.84 661.871 275.651H583.147C582.041 288.379 581.361 301.466 581.003 314.903H522.046C535.403 243.869 563.602 188.918 606.642 150.05H608.554H608.569Z" fill="#C5CFD6"/>
        <path id="Shade" d="M595.57 204.165C593.543 235.394 594.736 259.225 599.149 275.659H583.147C585.343 250.434 589.22 226.605 595.57 204.165Z" fill="black" fill-opacity="0.1"/>
        </g>
        <path id="shadow" d="M417.197 976.249C612.556 976.249 770.926 953.438 770.926 925.299C770.926 897.16 612.556 874.349 417.197 874.349C221.838 874.349 63.468 897.16 63.468 925.299C63.468 953.438 221.838 976.249 417.197 976.249Z" fill="url(#paint2_radial)"/>
        </g>
        <defs>
        <linearGradient id="paint0_linear" x1="139.04" y1="594.107" x2="695.653" y2="594.107" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FFB800" stop-opacity="0.9"/>
        <stop offset="1" stop-color="#EEAC00" stop-opacity="0.9"/>
        </linearGradient>
        <linearGradient id="paint1_linear" x1="290.572" y1="805.11" x2="549.798" y2="805.11" gradientUnits="userSpaceOnUse">
        <stop stop-color="#EEAC00"/>
        <stop offset="1" stop-color="#FFB800"/>
        </linearGradient>
        <radialGradient id="paint2_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(418.473 932.123) scale(354.991 51.9127)">
        <stop stop-opacity="0.2"/>
        <stop offset="0.27" stop-color="#242424" stop-opacity="0.18"/>
        <stop offset="1" stop-color="white" stop-opacity="0"/>
        </radialGradient>
        </defs>
        </svg>
      </section>
    );
  }
}

export default Hero;