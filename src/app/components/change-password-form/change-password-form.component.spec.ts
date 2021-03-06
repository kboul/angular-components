import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { ChangePasswordFormComponent } from "./change-password-form.component";

describe("ChangePasswordFormComponent", () => {
	let component: ChangePasswordFormComponent;
	let fixture: ComponentFixture<ChangePasswordFormComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [ChangePasswordFormComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ChangePasswordFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
