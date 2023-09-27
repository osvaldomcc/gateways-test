import { Section } from '@/sections/app/pages/DashboardPage';
import SectionInfo, {
  MAX_LIMIT,
} from '@/sections/app/pages/DashboardPage/SectionInfo';
import { render } from '@/tests/utils/test-utils';
import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { routes } from '@/sections/app/routes/index';

let sections: Section[] = [];
const categoryOne = 'Gateways';
const categoryTwo = 'Peripherals';

describe('SectionInfo', () => {
  it('should render the section headers', () => {
    sections = [
      { amount: 0, category: categoryOne, url: routes.gateways },
      { amount: 0, category: categoryTwo, url: routes.peripherals },
    ];
    render(
      <BrowserRouter>
        <SectionInfo sections={sections} />
      </BrowserRouter>,
    );
    const gatewaysElement = screen.getByRole('heading', {
      name: categoryOne,
    });
    const peripheralsElement = screen.getByRole('heading', {
      name: categoryTwo,
    });
    expect(gatewaysElement).toBeTruthy();
    expect(peripheralsElement).toBeTruthy();
  });

  it('should render the section amounts', () => {
    sections = [
      { amount: 0, category: categoryOne, url: routes.gateways },
      { amount: 0, category: categoryTwo, url: routes.peripherals },
    ];
    render(
      <BrowserRouter>
        <SectionInfo sections={sections} />
      </BrowserRouter>,
    );

    const gatewaysElement = screen.getByTitle(categoryOne);
    const peripheralsElement = screen.getByTitle(categoryTwo);

    expect(gatewaysElement).toBeTruthy();
    expect(peripheralsElement).toBeTruthy();
  });

  it('should render 10+ if amount is greater than 10', () => {
    sections = [
      { amount: 50, category: categoryOne, url: routes.gateways },
      { amount: 40, category: categoryTwo, url: routes.peripherals },
    ];
    render(
      <BrowserRouter>
        <SectionInfo sections={sections} />
      </BrowserRouter>,
    );

    const gatewaysElement = screen.getByTitle(categoryOne);
    const peripheralsElement = screen.getByTitle(categoryTwo);

    expect(gatewaysElement.textContent).toBe(`${MAX_LIMIT}+`);
    expect(peripheralsElement.textContent).toBe(`${MAX_LIMIT}+`);
  });
});
