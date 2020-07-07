import * as z from '.';
import { User, Post } from './userpost';

const gen = new z.ZodCodeGenerator();
gen.generate(User);
gen.generate(Post);
console.log(gen.dump());
