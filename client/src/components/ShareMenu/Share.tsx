import React from 'react';

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share';

import './share.scss';

type Props = {
  recipeUrl: string;
  message: string;
};

const Share: React.FC<Props> = ({ recipeUrl, message }) => {
  return (
    <div className="share">
      <FacebookShareButton
        url={recipeUrl}
        quote={message}
        hashtag="#doItYourSelf #RecipeLover"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton
        url={recipeUrl}
        title={message}
        hashtags={['#doItYourSelf', '#RecipeLover']}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <WhatsappShareButton url={recipeUrl} title={message} separator=":: ">
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </div>
  );
};

export default Share;
