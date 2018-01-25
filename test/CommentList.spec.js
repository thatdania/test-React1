import React from 'react';
import CommentList from '../src/components/CommentList';

describe('CommentList', () => {
  const wrapper = shallow(<CommentList />);

  it('calls componentDidMount', () => {
	spy(CommentList.prototype, 'componentDidMount');

    const wrapper = mount(<CommentList />);
    expect(CommentList.prototype.componentDidMount.calledOnce).to.equal(true);
});
});
