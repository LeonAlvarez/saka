import PaginationBar from 'src/saka/Main/Components/PaginationBar';
import { render } from 'preact-render-spy';
import { h } from 'preact';

describe('PaginationBar component ', function() {
  it('should be empty when no there are no suggestions', function() {
    const props = {
      firstVisibleIndex: 0,
      suggestions: [],
      maxSuggestions: 6,
      onClickPrevious: function() {},
      onClickNext: function() {}
    };

    const paginationBarRender = render(<PaginationBar {...props} />);
    const paginationList = paginationBarRender
      .find('.paginator-text-info')
      .text();

    expect(paginationList).toBe('');
  });

  it('should show correct amount of suggestions when there are suggestions found', function() {
    const props = {
      firstVisibleIndex: 0,
      suggestions: [
        {
          type: 'tab',
          title: 'lusakasa/saka: Elegant tab search',
          url: 'https://github.com/lusakasa/saka'
        },
        {
          type: 'tab',
          title: 'Google',
          url: 'https://google.com'
        }
      ],
      maxSuggestions: 6,
      onClickPrevious: function() {},
      onClickNext: function() {}
    };

    const paginationBarRender = render(<PaginationBar {...props} />);
    const paginationList = paginationBarRender
      .find('.paginator-text-info')
      .text();

    expect(paginationList).toBe('1 - 2 / 2');
  });
});
