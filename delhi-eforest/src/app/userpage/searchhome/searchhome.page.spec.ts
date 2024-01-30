import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchhomePage } from './searchhome.page';

describe('SearchhomePage', () => {
  let component: SearchhomePage;
  let fixture: ComponentFixture<SearchhomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SearchhomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
