import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { BootstrapPanelComponent } from "./bootstrap-panel.component";

describe("BootstrapPanelComponent", () => {
	let component: BootstrapPanelComponent;
	let fixture: ComponentFixture<BootstrapPanelComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [BootstrapPanelComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BootstrapPanelComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
