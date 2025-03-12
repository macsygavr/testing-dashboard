import React, { FC } from "react";
import css from './index.module.css'

type Props = {
  title: string;
}

const Header: FC<Props> = ({ title }) => {
  return (
    <div className={css.container} >
      {title}
    </div>
  );
};

export default Header;
