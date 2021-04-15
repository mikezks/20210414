import {DefaultFlightService} from "./default-flight.service";
import {DummyFlightService} from "./dummy-flight.service";
import {AbstractFlightService} from "./abstract-flight.service";
import {Type} from "@angular/core";

export const serviceDictionary: Record<string, Type<AbstractFlightService>> = {
  default: DefaultFlightService,
  dummy: DummyFlightService
};
