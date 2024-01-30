import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountpagePage } from './accountpage.page';

describe('AccountpagePage', () => {
  let component: AccountpagePage;
  let fixture: ComponentFixture<AccountpagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AccountpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
