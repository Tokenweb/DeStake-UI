import React from 'react';
import Avatars from '@dicebear/avatars';
import regularSprites from '@dicebear/avatars-jdenticon-sprites';
import humanSprites from '@dicebear/avatars-human-sprites';
import { CSSObject } from '@emotion/react';

interface Props {
  alt: string;
  address: string;
  human: boolean;
}

const Avatar = ({ alt, address, human }: Props & CSSObject) => {
  const sprites = human ? humanSprites : regularSprites;
  const options = { mood: [`happy`], dataUri: true };
  // @ts-ignore
  const avatars = new Avatars(sprites, options);
  const avatar = avatars.create(address);
  return (
    <div>
      <img alt={alt} src={avatar} />
    </div>
  );
};
export default Avatar;
