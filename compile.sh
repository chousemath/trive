#!/bin/bash

tsc index.ts
tsc test/test.ts

tsc data/color.ts
tsc data/common.ts
tsc data/device.ts
tsc data/generation.ts

tsc interfaces/address.ts
tsc interfaces/brand.ts
tsc interfaces/category.ts
tsc interfaces/email-password-credentials.ts
tsc interfaces/estimate.ts
tsc interfaces/event.ts
tsc interfaces/header-option.ts
tsc interfaces/hot-deal.ts
tsc interfaces/option.ts
tsc interfaces/point-data.ts
tsc interfaces/side-menu.ts
tsc interfaces/used.ts
tsc interfaces/user-header.ts
tsc interfaces/vehicle-gen.ts
tsc interfaces/vehicle-model.ts
tsc interfaces/vehicle.ts